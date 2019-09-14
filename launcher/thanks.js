function DownloadAndRedirectStable()
{
   var DownloadURL = "https://github.com/TheCrafters001/TheCrafters001-Launcher/releases/latest/download/Installer.msi";
   var RedirectURL = "/launcher/thankyou_stable.html";
   var RedirectPauseSeconds = 9;
   location.href = DownloadURL;
   setTimeout("DoTheRedirect('"+RedirectURL+"')",parseInt(RedirectPauseSeconds*100));
}
function DoTheRedirect(url) { window.location=url; }

function DownloadAndRedirectSource()
{
   var DownloadURL = "https://github.com/TheCrafters001/TheCrafters001-Launcher/archive/master.zip";
   var RedirectURL = "/launcher/thankyou_source.html";
   var RedirectPauseSeconds = 9;
   location.href = DownloadURL;
   setTimeout("DoTheRedirect('"+RedirectURL+"')",parseInt(RedirectPauseSeconds*100));
}
function DoTheRedirect(url) { window.location=url; }

function DownloadAndRedirectReleases()
{
   var DownloadURL = "";
   var RedirectURL = "https://github.com/TheCrafters001/TheCrafters001-Launcher/releases/latest";
   var RedirectPauseSeconds = 9;
   location.href = DownloadURL;
   setTimeout("DoTheRedirect('"+RedirectURL+"')",parseInt(RedirectPauseSeconds*100));
}
function DoTheRedirect(url) { window.location=url; }

