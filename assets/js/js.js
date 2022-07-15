let userAgent = navigator.appVersion;
let osDetails = {
    name: 'your device is not available',
    icon: 'fa-frown-o',
    link: '#'
};
if (userAgent.includes('Windows')) {
    osDetails.name = 'Windows';
    osDetails.icon = 'fa-windows';
    osDetails.link = "https://gitlab.com/Manvendra-div/rockerz-release/-/blob/main/rockerz_setup.exe";
}

if (userAgent.includes('Linux')) {
    osDetails.name = 'Linux';
    osDetails.icon = 'fa-linux';
    osDetails.link = "sorry.html";
    if (userAgent.includes('Android')) {
        name='your device is not available';
        icon= 'fa-frown-o';
        link='#';
    };
}
updateOsDownloadButton(osDetails);
afterClick(osDetails);

function updateOsDownloadButton(osDetails) {
  let iconHtml = '<i class="fa fa-star ' + osDetails.icon + '"></i>'
  document.querySelector('.btn-primary').innerHTML = 'Download for ' + osDetails.name + iconHtml
}

function afterClick(osDetails) {document.getElementById("downloadbtn").href=osDetails.link;
}
