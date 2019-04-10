export function init() {
    return fetch("https://www.ebay.com/rps/feed/v1.1/epnexcluded/EBAY-US?limit=200")
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
			console.log(data)
			return formatQuestion(xmlToJson(data))
		})//
}

function formatQuestion(data){
	console.log(data)
//	console.log(data.eBayDealsAndEventsItems.item)
}
/**
 * Originally from http://davidwalsh.name/convert-xml-json
 * This is a version that provides a JSON object without the attributes and places textNodes as values
 * rather than an object with the textNode in it.
 * 27/11/2012
 * Ben Chidgey
 *
 * @param xml
 * @return {*}
 */
function xmlToJson(xml) {

    // Create the return object
    var obj = {};

    // text node
    if (4 === xml.nodeType) {
        obj = xml.nodeValue;
    }

    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var TEXT_NODE_TYPE_NAME = '#text',
                item = xml.childNodes.item(i),
                nodeName = item.nodeName,
                content;

            if (TEXT_NODE_TYPE_NAME === nodeName) {
                //single textNode or next sibling has a different name
                if ((null === xml.nextSibling) || (xml.localName !== xml.nextSibling.localName)) {
                    content = xml.textContent;

                //we have a sibling with the same name
                } else if (xml.localName === xml.nextSibling.localName) {
                    //if it is the first node of its parents childNodes, send it back as an array
                    content = (xml.parentElement.childNodes[0] === xml) ? [xml.textContent] : xml.textContent;
                }
                return content;
            } else {
                if ('undefined' === typeof(obj[nodeName])) {
                    obj[nodeName] = xmlToJson(item);
                } else {
                    if ('undefined' === typeof(obj[nodeName].length)) {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }

                    obj[nodeName].push(xmlToJson(item));
                }
            }
        }
    }
    return obj;
}
