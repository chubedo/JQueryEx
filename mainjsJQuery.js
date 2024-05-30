jQuery(document).ready(function() {
    $('.box-space .buttons button:nth-child(1)').click(function() {
        var selectedValue;
        var radioButtonElements = $('.row-4 .box:nth-child(1) input')
        radioButtonElements.each(function(index, element) {
            if (element.checked) {
                selectedValue = element.value;
                return false;
            }
        }) 
        if (selectedValue != undefined) {
            alert('Ban da chon gia tri: ' + selectedValue);
        } else {
            alert('Ban chua chon gia tri nao');
        }      
    })

    $('.box-blue .input-text button').click(function() {
        var linkText =  $('.box-blue .input-text textarea').val();
        var imgBox = $('.row-5 .box:nth-child(2)')
        console.log(linkText);
        var img = $('<img>').attr('src', linkText).css({
            'maxWidth': '100%',
            'maxHeight': '100%',
            'objectFit': 'contain'
        })
        img.on('load', function() {
            imgBox.append(img);
        })
        img.on('error', function() {
            alert('duong dan khong hop le');
        })
    })

    $('.row-4 .box:nth-child(2) button').click(function() {
        var firstString = $('.row-4 .box:nth-child(2) input:nth-child(1)').val();
        var secondString = $('.row-4 .box:nth-child(2) input:nth-child(2)').val();
        var finalString = firstString + " " + secondString;
        $('.row-5 .box-space .box').text(finalString);
    })

    $('.row-5 .box-space .buttons button:nth-child(2)').click(function() {
        var firstOption = $('.row-5 .box-space .choose-option label input');
        var secondOption = $('.row-5 .box-space .choose-option label:nth-child(2) input');
        var textNotiElement = $('.banner');
        var values = [];
        if (firstOption.prop('checked')) values.push(firstOption.val());
        if (secondOption.prop('checked')) values.push(secondOption.val());       
        textNotiElement.text(values.length ? values.join(' ') : 'khong co gia tri duoc chon');
    })

    $('.row-5 .box-space .buttons button:nth-child(3)').click(function() {
        var optionValue = $('.row-5 .box-space .choose-option input');
        optionValue.each(function(index, element) {
            element.checked = false;
        })
    })

    
    var valueOfOne = $('.row-4 .box:nth-child(5) select option:nth-child(2)').val();
    var valueOf_ = $('.row-4 .box:nth-child(5) select option:nth-child(1)').val();
    var box09 = $('.row-3 .box:nth-child(7)');
    $('.row-4 .box:nth-child(5) button').click(function() {
        $('.row-4 .box:nth-child(5) select').change(function() {
            var isSelected = $(this).val();
            console.log(isSelected);
            if (isSelected === valueOfOne) {
                box09.css('background-color', 'black');
            } else if (isSelected === valueOf_) {
                box09.css('background-color', '');
            }
        });
    });

    $('.row-4 .box:nth-child(5) select').change(function() {
        var isSelected = $(this).val();
        var valueOfOne = $('.row-4 .box:nth-child(5) select option:nth-child(2)').val();
        if (isSelected == valueOfOne) {
            alert('ban da thay doi gia tri cua combobox');
        }
    })

   $('.row-4 .box:nth-child(2) button').click(function() {
        var color1 = $('.row-4 .box:nth-child(2) input:nth-child(1)').val();
        var color2 = $('.row-4 .box:nth-child(2) input:nth-child(2)').val();
        var color = color1 || color2;
        var boxes = $('.box-a');
        boxes.each(function(index, element) {
            element.style.backgroundColor = color;
        })
   }) 

    function getDate() {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        return day + '/' + month + '/' + year;
    }
    function getTime() {
        var now = new Date();
        var second = now.getSeconds();
        var min = now.getMinutes();
        var hour = now.getHours();
        return hour + ":" + min + ":" + second;
    }
    
    function getBrowser() {
        var browser = navigator.userAgent.toLowerCase();
        if (browser.indexOf('chrome') > -1) return 'chrome';
        if (browser.indexOf('firefox') > -1) return 'firefox';
        if (browser.indexOf('opr') > -1) return 'opera'; 
    }

    $('.row-4 .box-blue:nth-child(3) button').click(function() {
        var browserIsSelected = $('.datalist').val().toLowerCase();
        console.log(browserIsSelected);
        var browserIsUsing = getBrowser();
        var mess;
        if (browserIsSelected == browserIsUsing) {
            var timeNow = getTime();
            mess = "Dung trinh duyet - [" + timeNow + "]";
        } else {
            var dateNow = getDate();
            mess = "Sai trinh duyet - [" + dateNow + "]";
        }
        alert(mess);        
    })

    $(document).ready(function() {
        $('.box-blue .input-text button').click(function() {
            var text = $('.box-blue .input-text textarea').val();
            var boxes = $('.box-a');
    
            boxes.each(function() {
                var box = $(this);
                if (text === 'Add textbox') {
                    if (box.find('input').length === 0) {
                        var textBox = $('<input type="text">');
                        box.append(textBox);
                    }
                } else if (text === 'Remove textbox') {
                    var textBox = box.find('input[type="text"]');
                    if (textBox.length) {
                        textBox.remove();
                    }
                }
            });
        });
    });    
})