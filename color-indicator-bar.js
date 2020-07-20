// Author: Eduardo Henrique Rotundaro
// Version: 1.0.0
(function(window){
    function colorIndicatorBar(){
        var _colorIndicatorBar = {
            createElement(options) {
                var tags = '<div class="mbowyh">';
                tags += '<div class="sezdat">';
                tags += '<span class="ohmtas">' + options.leftLabelText + '</span>';
                tags += '<span class="ksaqqk">' + options.rightLabelText + '</span>';
                tags += '</div>';
                tags += '<div class="bwuokh"></div>';
                tags += '<div class="jpmukq">';
                tags += '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">';
                tags += '<g>';
                tags += '<path transform="rotate(0,16,16) translate(0,1.35000133514404) scale(1,1)  " fill="' + options.arrowColor + '" d="M16,0L32,11.899998 22,11.899998 22,29.299997 10,29.299997 10,11.899998 0,11.899998z" />';
                tags += '</g>';
                tags += '</svg>';
                tags += '</div>';
                tags += '</div>';
                return tags;
            },
            calculateArrowShift(value) {
                var px = ((value * 34) / 100).toFixed();
                return 'calc(' + value + '% - ' + px + 'px)';
            },
            createStyle(options) {
                var totalShift = this.calculateArrowShift(options.value);
                var styleTag = '<style>.mbowyh{ width: 100%; background: transparent; overflow-x: auto; height: 110px; } ';
                styleTag += '.sezdat{ font-size: 16px; font-family: Arial, Helvetica, sans-serif; } ';
                styleTag += '.ohmtas{ color: ' + options.leftLabelColor + '; } ';
                styleTag += '.ksaqqk{ color: ' + options.rightLabelColor + '; float: right; } ';
                styleTag += '.bwuokh{ height: 32px; background-image: -webkit-gradient(linear, right top, left top, color-stop(-1.15%, #039A48), color-stop(50.08%, rgba(255, 230, 0, 0.967497)), color-stop(100.25%, rgba(255, 0, 0, 0.94)), color-stop(100.26%, rgba(0, 197, 90, 0))); background-image: -o-linear-gradient(right, #039A48 -1.15%, rgba(255, 230, 0, 0.967497) 50.08%, rgba(255, 0, 0, 0.94) 100.25%, rgba(0, 197, 90, 0) 100.26%); background-image: linear-gradient(270deg, #039A48 -1.15%, rgba(255, 230, 0, 0.967497) 50.08%, rgba(255, 0, 0, 0.94) 100.25%, rgba(0, 197, 90, 0) 100.26%); margin-left: 17px; margin-right: 17px; transform: rotate(-180deg); } ';
                styleTag += '.jpmukq { width: 100%; padding-left:' + totalShift + ' }';
                styleTag += '.jpmukq svg{ position: absolute; }';
                styleTag += '</style>';
                return styleTag;
            },
            validateOptions(options) {
                var error = null;
                var onlyNumbers = new RegExp(/^\d+$/);
                if(!options) error = 'The options object is required. See README.md file for more information.';
                if(!options.targetId) error = 'The target ID is required. See README.md file for more information.';
                if(!options.value===null || !options.value===undefined) error = 'The value of percentage is required. See README.md file for more information.';
                if(!onlyNumbers.test(options.value.toString()) || (options.value<0 || options.value>100)) error = 'The value of percentage must be an integer from 0 to 100. See README.md file for more information.';
                if(error) throw new Error(error);
            },
            getStyleSettings(options) {
                var settings = {};
                settings.value = options.value;
                settings.leftLabelText = options.leftLabelText? options.leftLabelText : 'Baixo';
                settings.rightLabelText = options.rightLabelText? options.rightLabelText : 'Alto';
                settings.leftLabelColor = options.leftLabelColor? options.leftLabelColor : '#212F3C';
                settings.rightLabelColor = options.rightLabelColor? options.rightLabelColor : '#212F3C';
                settings.arrowColor = options.arrowColor? options.arrowColor : '#212F3C';
                return settings;
            },
            create(options) {
                this.validateOptions(options);
                var styleSettings = this.getStyleSettings(options);
                var style = this.createStyle(styleSettings);
                var element = this.createElement(styleSettings);
                document.getElementById(options.targetId).innerHTML = (style + element);
            }
        };
        return _colorIndicatorBar;
    }
    if(typeof(window.ColorIndicatorBar) === 'undefined'){
        window.ColorIndicatorBar = colorIndicatorBar();
    }
})(window);
