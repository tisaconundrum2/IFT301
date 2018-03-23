/**
 * Created by tisaconundrum on 3/22/2018.
 */
function setHeader() {
    var link = document.querySelector('link[rel="import"]');
    var template = link.import.querySelector('template');
    document.querySelector('#wrap').appendChild(template.content);
}
