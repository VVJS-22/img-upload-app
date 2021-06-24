const SECRET_URL = "https://api.cloudinary.com/v1_1/js-with-js/upload";

const PRESET = 'rjgg4xcn'

const imgPreview = document.getElementById('img-preview');
const fileUpload = document.getElementById('file-upload');
fileUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', PRESET);
    axios({
        url: SECRET_URL,
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-from-urlencoded'
        },
        data: formData
    }).then( (res) => {
        console.log(res);
        imgPreview.src = res.data.secure_url;
    }).catch((error) => {
        console.log(error);
    })
})