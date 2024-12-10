/* Photo upload section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Icon } from 'semantic-ui-react';
export default class PhotoUpload extends Component {

    constructor(props) {
        super(props);

        this.loadImages = this.loadImages.bind(this);
        this.selectFileToUpload = this.selectFileToUpload.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
        this.maxFileSize = 2097152;
        this.maxNoOfFiles = 1;
        this.acceptedFileType = ["image/gif", "image/jpeg", "image/png", "image/jpg"];

        this.state = {
            selectedFile: [],
            selectedFileName: [],
            imageSrc: [],
            imageId: [],
            selectedRemoveFileId: [],
            currentNoOfFiles: 0
        }
    };

    loadImages() {

        var cookies = Cookies.get('talentAuthToken');

        $.ajax({
            url: 'http://localhost:60290/profile/profile/getProfilePhoto',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {

                let imageSrcArr = [];
                let imageIdArr = [];
                let selectedFileArr = [];

                imageSrcArr.push("http://localhost:60290/profile/profile/getProfileImage/?Id=" + res.profilePath);
                imageIdArr.push(res.profilePath);
                selectedFileArr.push("");                
                // if (res.employerProfile.length > 0) {
                //     for (var i = 0; i < res.employerProfile.length; i++) {
                //         imageSrcArr.push("http://localhost:60290/profile/profile/getProfileImage/?Id=" + res.employerProfile[i].fileName);
                //         imageIdArr.push(res.employerProfile[i].id);
                //         selectedFileArr.push("");
                //     }
                // }

                this.setState({
                    imageSrc: imageSrcArr,
                    imageId: imageIdArr,
                    selectedFile: selectedFileArr,
                    selectedFileName: [],
                    selectedRemoveFileId: [],
                    currentNoOfFiles: res.employerProfile.length
                });
            }.bind(this)
        });
    }

    selectFileToUpload() {
        document.getElementById('selectFile').click();
    }

    fileSelectedHandler(event) {

        let localSelectedFile = this.state.selectedFile;
        let localSelectedFileName = this.state.selectedFileName;
        let localImageSrc = this.state.imageSrc;
        let localImageId = this.state.imageId;
        let localCurrentNoOfFiles = this.state.currentNoOfFiles;

        for (let i = 0; i < event.target.files.length; i++) {

            if (event.target.files[i].size > this.maxFileSize || this.acceptedFileType.indexOf(event.target.files[i].type) == -1) {
                TalentUtil.notification.show("Max file size is 2 MB and supported file types are *.jpg, *.jpeg, *.png, *.gif", "error", null, null);
            } else if (localCurrentNoOfFiles >= this.maxNoOfFiles) {
                TalentUtil.notification.show("Exceed Maximum number of files allowable to upload", "error", null, null);
            } else {
                localSelectedFile = localSelectedFile.concat(event.target.files[i]),
                localSelectedFileName = localSelectedFileName.concat(event.target.files[i].name),
                localImageSrc = localImageSrc.concat(window.URL.createObjectURL(event.target.files[i])),
                localImageId = localImageId.concat('0'),
                localCurrentNoOfFiles = localCurrentNoOfFiles + 1
            }
        }
        this.setState({
            selectedFile: localSelectedFile,
            selectedFileName: localSelectedFileName,
            imageSrc: localImageSrc,
            imageId: localImageId,
            currentNoOfFiles: localCurrentNoOfFiles
        })
    }

    removeFile(event) {
        let localselectedRemoveFileId = this.state.selectedRemoveFileId;
        let localSelectedFile = this.state.selectedFile;
        let localSelectedFileName = this.state.selectedFileName;
        let localImageSrc = this.state.imageSrc;
        let localImageId = this.state.imageId;
        let localCurrentNoOfFiles = this.state.currentNoOfFiles;

        localselectedRemoveFileId = localselectedRemoveFileId.concat(event.target.getAttribute('imageid'));
        localSelectedFile.splice(event.target.getAttribute('value'), 1);
        localSelectedFileName.splice(event.target.getAttribute('value'), 1);
        localImageSrc.splice(event.target.getAttribute('value'), 1);
        localImageId.splice(event.target.getAttribute('value'), 1);

        this.setState({
            selectedFile: localSelectedFile,
            selectedFileName: localSelectedFileName,
            imageSrc: localImageSrc,
            imageId: localImageId,
            selectedRemoveFileId: localselectedRemoveFileId,
            currentNoOfFiles: this.state.currentNoOfFiles - 1
        })
    }

    fileUploadHandler() {
        if (this.state.selectedFile.length > 0) {
            let data = new FormData();
            for (var i = 0; i < this.state.selectedFile.length; i++) {
                if (this.state.selectedFile[i] != "") {
                    data.append('file' + i, this.state.selectedFile[i]);
                }
            }

            var cookies = Cookies.get('talentAuthToken');

            $.ajax({
                url: 'http://localhost:60290/profile/profile/UpdateProfilePhoto',
                headers: {
                    'Authorization': 'Bearer ' + cookies
                },
                type: "POST",
                data: data,
                cache: false,
                processData: false,
                contentType: false,
                success: function (res) {
                    if (res.success) {
                        TalentUtil.notification.show("Profile photo updated successfully", "success", null, null)
                        this.loadImages();
                    } else {
                        TalentUtil.notification.show(res.message, "error", null, null);
                    }
                }.bind(this),
                error: function (res, status, error) {
                    //Display error
                    TalentUtil.notification.show("There is an error when updating Images - " + error, "error", null, null);
                }
            });
        }
    }

    render() {
        let showProfileImg = [];

        for (let i = 0; i < this.state.currentNoOfFiles; i++) {
            if (this.state.imageSrc[i] != null) {
                showProfileImg.push(<span key={i}><img style={{ height: 112, width: 112, borderRadius: 55 }} className="ui small" src={this.state.imageSrc[i]} alt="Image Not Found" /><i className="remove sign icon" onClick={this.removeFile} value={i} imageid={this.state.imageId[i]}></i></span>);
            }
        }

        if (this.state.currentNoOfFiles < this.maxNoOfFiles) {
            showProfileImg.push(<span key="new"><i className="huge circular camera retro icon" style={{ alignContent: 'right', verticalAlign: 'top' }} onClick={this.selectFileToUpload}></i></span>);
        }

        return (
            <div className="ui grid container">
                <div className="ui four wide column">
                    <div className="field">
                        <h3>Profile Photo</h3>
                        <div className="tooltip">Upload image of your profile here</div>
                    </div>
                </div>
                <div className="ui twelve wide column">
                    <div className="field">
                        <div style={{marginBottom: '15px'}}>
                            <label htmlFor="work_sample_uploader" className="profile-photo">
                                {showProfileImg}
                            </label>
                            <input id="selectFile" type="file" style={{ display: 'none' }} onChange={this.fileSelectedHandler} accept="image/*" />
                        </div>
                        <div>
                            <button 
                                type="button" 
                                className="ui teal button" 
                                onClick={this.fileUploadHandler}
                            >
                                <Icon name='upload'></Icon>Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}