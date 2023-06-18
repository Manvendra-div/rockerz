let userAgent = navigator.appVersion;
let osDetails = {
    name: 'your device is not available',
    icon: 'fa-frown-o',
    link: '#'
};
if (userAgent.includes('Windows')) {
    osDetails.name = 'Windows';
    osDetails.icon = 'fa-windows';
    osDetails.link = "https://gitlab.com/Manvendra-div/rockerz-release/-/raw/main/rockerz_setup.exe?inline=false";
}

if (userAgent.includes('Linux')) {
    osDetails.name = 'Linux';
    osDetails.icon = 'fa-linux';
    osDetails.link = "sorry.html";
}
if (userAgent.includes('Android')) {
    osDetails.name='Android is not available'
    osDetails.icon= 'fa-frown-o'
    osDetails.link='#'
}

updateOsDownloadButton(osDetails);
afterClick(osDetails);

function updateOsDownloadButton(osDetails) {
  let iconHtml = '<i class="fa fa-star ' + osDetails.icon + '"></i>'
  document.querySelector('.btn-primary').innerHTML = 'Download for ' + osDetails.name + iconHtml
}

function afterClick(osDetails) {document.getElementById("downloadbtn").href=osDetails.link;
}
