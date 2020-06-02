$(function () {
    let a = 0;
    $(".font_weight").click(function () {
        if (a == 0) {
            $(".font_weight").addClass('active_1')
            $(".text").css('font-weight', '800');
            a++
        }
        else {
            $(".font_weight").removeClass('active_1')
            $(".text").css('font-weight', '100');
            a = 0;
        }
    });

    let b = 0;
    $(".font_style").click(function () {
        if (b == 0) {
            $(".font_style").addClass('active_1')
            $(".text").css('font-style', 'italic');
            b++
        }
        else {
            $(".font_style").removeClass('active_1')
            $(".text").css('font-style', 'normal');
            b = 0;
        }
    });

    let c = 0;
    $(".font_emphasis").click(function () {
        if (c == 0) {
            $(".font_emphasis").addClass('active_1')
            $(".text").css('text-decoration', 'underline');
            $(".font_strikeout").attr("disabled", true)
            c++
        }
        else {
            $(".font_emphasis").removeClass('active_1')
            $(".text").css('text-decoration', 'none');
            $(".font_strikeout").attr("disabled", false)
            c = 0;
        }
    });

    let d = 0;
    $(".font_strikeout").click(function () {
        if (d == 0) {
            $(".font_strikeout").addClass('active_1')
            $(".text").css('text-decoration', 'line-through');
            $(".font_emphasis").attr("disabled", true)
            d++

        }
        else {
            $(".font_strikeout").removeClass('active_1')
            $(".text").css('text-decoration-line', 'none');
            $(".font_emphasis").attr("disabled", false)
            d = 0;
        }
    });

    $(".cl").click(function () {
        $(".cl").removeClass('active_1')
        $(this).addClass('active_1')
        $(".text").css('text-align', this.value);
    })

    let k = 0;
    let l = 0;
    $(".fonts").click(function () {
        if (k == 0) {
            $(".dropdown_first").css('display', 'flex');
            $(".fonts").addClass('active_1');
            $(".dropdown_second").css('display', 'none');
            $(".font_size").removeClass('active_1');
            l = 0;
            k++;
        }
        else {
            $(".dropdown_first").css('display', 'none');
            $(".fonts").removeClass('active_1');
            k = 0;
        }
    });

    $(".font_size").click(function () {
        if (l == 0) {
            $(".dropdown_second").css('display', 'flex');
            $(".font_size").addClass('active_1');
            $(".dropdown_first").css('display', 'none');
            $(".fonts").removeClass('active_1');
            k = 0;
            l++;
        }
        else {
            $(".dropdown_second").css('display', 'none');
            $(".font_size").removeClass('active_1');
            l = 0;
        }
    });
});

$(function () {
    $(".dropdown-item").click(function (event) {
        $(".text").css('font-family', event.target.innerText);
        $(".dropdown_first").css('display', 'none');
        $(".fonts").removeClass('active_1');
        k = 0;
    });
    $(".dropdown-item-s").click(function (event) {
        $(".text").css('font-size', event.target.innerText);
        $(".dropdown_second").css('display', 'none');
        $(".font_size").removeClass('active_1');
        l = 0;
    });
});

$(function () {
    $(".palette").click(function () {
        $(".modal_colors").css('display', 'block');
    });
    $(".gallery").click(function () {
        $(".modal_background").css('display', 'block');
    });
});

$(function () {
    let i = 0;
    while (i < 21) {
        $('.modal_content_down').append(`<div class="small_block_color color${i}"></div`)
        i++;
    }
    $('.small_block_color').click(function (event) {
        $(".text").css('color', $(event.target).css('backgroundColor'));
    });
    $(".fa-times").click(function () {
        $(".modal_colors").css('display', 'none');

    })
});

$(function () {
    let i = 0;
    while (i < 21) {
        $('.modal_content_down_2_1').append(`<div class="small_block_color_2 color${i}"></div`)
        i++;
    }
    $('.small_block_color_2').click(function (event) {
        $(".text").css('background-color', $(event.target).css('backgroundColor'));
        $(".text").css('background-image', 'none');
    });
    $(".close_2").click(function () {
        $(".modal_background").css('display', 'none');

    })
});

$(function () {
    let i = 0;
    while (i < 9) {
        $('.modal_content_down_2_2').append(`<div class="small_block background${i}"></div`)
        i++;
    }
    $('.modal_content_down_2_2').click(function (event) {
        $(".text").css('background-image', $(event.target).css('backgroundImage'));
    });
});

$(function () {
    $("#file").change(function (event) {
        const url = URL.createObjectURL(event.target.files[0])
        $(".text").css('background-image', `url(${url})`);
    })
});

$(function () {
    $('.center').click(function (event) {
        $('.center').removeClass('active')
        $(event.target).addClass('active')
    })
    $('.colors').click(function () {
        $(".modal_content_down_2_1").css('display', 'flex');
        $(".modal_content_down_2_2").css('display', 'none');
        $(".modal_content_down_2_3").css('display', 'none');
        $(".color").text('Choose text color')
    })
    $('.images').click(function () {
        $(".modal_content_down_2_1").css('display', 'none');
        $(".modal_content_down_2_2").css('display', 'flex');
        $(".modal_content_down_2_3").css('display', 'none');
        $(".color").text('Choose background color or image')
    })
    $('.files').click(function () {
        $(".modal_content_down_2_1").css('display', 'none');
        $(".modal_content_down_2_2").css('display', 'none');
        $(".modal_content_down_2_3").css('display', 'flex');
    })
});

$(function () {
    $('.lock').click(function () {
        $(".modal_form_1").css('display', 'flex')
    })
    $('#form_1_button').click(function () {
        let regExpFirst = /^[a][d][m][i][n]$/i;
        let regExpSecond = /^[a][d][m][i][n]$/
        let login = regExpFirst.test($('#login')[0].value);
        let password = regExpSecond.test($('#password')[0].value);

        if (login) {
            $("#login").css('border', '1px solid #d0d2d4');
            $("#login").css('box-shadow', 'none');
            $(".error").css('display', 'none');
        }
        else {
            $("#login").css('border', '2px solid #ac5c63');
            $("#login").css('box-shadow', '0px 0px 5px 1px #ac5c63');
            $(".error").css('display', 'flex');
            if ($('#login')[0].value == '') {
                $(".error").text('Value is empty');
            }
            else {
                $(".error").text('Please check your login or password');
            }
        }

        if (password) {
            $("#password").css('border', '1px solid #d0d2d4');
            $("#password").css('box-shadow', 'none');
            $(".error").css('display', 'none');
        }
        else {
            $("#password").css('border', '2px solid #ac5c63');
            $("#password").css('box-shadow', '0px 0px 5px 1px #ac5c63');
            $(".error").css('display', 'flex');
            if ($('#password')[0].value == '') {
                $(".error").text('Value is empty');
            }
            else {
                $(".error").text('Please check your login or password');
            }
        }

        if (login && password) {
            $(".modal_form_1").css('display', 'none');
            $(".lock").css('display', 'none');
            $(".unlock").css('display', 'block');
            $(".code").attr("disabled", false);
        }
    })
    $('.close').click(function () {
        $(".modal_form_1").css('display', 'none')
    })
})

$(function () {
    $(".unlock").click(function () {
        $(".modal_buttons").css('display', 'flex')
    })
    $(".cancel").click(function () {
        $(".modal_buttons").css('display', 'none')
    })
    $(".sign_out").click(function () {
        $(".modal_buttons").css('display', 'none')
        $(".lock").css('display', 'block');
        $(".unlock").css('display', 'none');
        $(".code").attr("disabled", true);
        $(".form_1")[0].reset()
    })
})


$(function () {
    $(".code").click(function () {
        $(".main_1").css('display', 'none')
        $(".main_2").css('display', 'flex')
        $(".area")[0].value = $('.text').html();

    })

    $(".save").click(function () {
        $(".main_1").css('display', 'flex')
        $(".main_2").css('display', 'none')
        $('.text').html($(".area")[0].value)
    })
})

$(function () {
    $(".table").click(function () {
        $(".modal_form_2").css('display', 'block')
    })
    $(".list_ol").click(function () {
        $(".modal_form_3").css('display', 'block')
    })
    $(".list_ul").click(function () {
        $(".modal_form_4").css('display', 'block')
    })
    $(".close").click(function () {
        $(".modal_form_2").css('display', 'none')
        $(".modal_form_3").css('display', 'none')
        $(".modal_form_4").css('display', 'none')
    })
})


$(function () {
    $(".create_table").click(function () {
        let regExpFirst = /^\d{1,2}$/;
        let count = 0;

        $(".check").each(function (ind, elem) {
            let login = regExpFirst.test(elem.value);
            if (elem.value == '' || !login) {
                $(elem).css('box-shadow', '0px 0px 5px 1px #ac5c63');
                $('.error_1').css('display', 'flex')
                count++
            }
            else {
                $(elem).removeClass('false')
                $(elem).css('border', '1px solid #d0d2d4');
                $(elem).css('box-shadow', 'none');

            }
        })

        $(".check_select").each(function (ind, elem) {
            if (elem.value == 'choose style' || elem.value == 'choose color') {
                $(elem).css('box-shadow', '0px 0px 5px 1px #ac5c63');
                $('.error_1').css('display', 'flex')
                count++
            }
            else {
                $(elem).removeClass('false')
                $(elem).css('border', '1px solid #d0d2d4');
                $(elem).css('box-shadow', 'none');
            }
        })

        if (count == 0) {
            let table = `<table>`
            for (let i = 1; i <= $("#tr")[0].value; i++) {
                table += `<tr>`;
                for (let j = 1; j <= $("#td")[0].value; j++) {
                    table += `<td style="width: ${$("#tdW")[0].value + 'px'};height: ${$("#tdH")[0].value + 'px'};border: ${$("#widthBord")[0].value + 'px'} ${$("#typeB")[0].value} ${$("#colorB")[0].value}">TD</td>`;
                }
                table += `</tr>`;
            }
            table += `</table>`;
            $('.area')[0].value += table;
            $('.error_1').css('display', 'none')
        }
    })

    $(".reset").click(function () {
        $(".check").each(function (ind, elem) {
            $(elem).css('box-shadow', 'none');
        })
        $(".check_select").each(function (ind, elem) {
            $(elem).css('box-shadow', 'none');
        })
        $(".form_3")[0].reset();
        $("#colorB").prop('selectedIndex', 0)
        $("#typeB").prop('selectedIndex', 0)
        $('.error_1').css('display', 'none')

    })
})

$(function () {
    $(".create_list").click(function () {
        let regExpFirst = /^\d{1,2}$/;
        let count = 0;
        let list = regExpFirst.test($("#list_ol")[0].value);

        if (!list) {
            $("#list_ol").css('box-shadow', '0px 0px 5px 1px #ac5c63');
            $('.error_2').css('display', 'flex')
            count++
        }
        else {
            $("#list_ol").css('border', '1px solid #d0d2d4');
            $("#list_ol").css('box-shadow', 'none');
        }

        if ($("#type_ol")[0].value == 'choose Ol type mark') {
            $("#type_ol").css('box-shadow', '0px 0px 5px 1px #ac5c63');
            $('.error_2').css('display', 'flex')
            count++
        }
        else {
            $("#type_ol").css('border', '1px solid #d0d2d4');
            $("#type_ol").css('box-shadow', 'none');
        }

        if (count == 0) {
            let list = `<ol type="${$("#type_ol")[0].value}" >`;
            for (let i = 1; i <= $("#list_ol")[0].value; i++) {
                list += `<li >item ${i}</li>`;
            }
            list += "</ol>";
            $('.area')[0].value += list;
        }
    })
    $(".reset").click(function () {
        $("#list_ol").css('box-shadow', 'none');
        $("#type_ol").css('box-shadow', 'none');
        $(".form_4")[0].reset();
        $("#type_ol").prop('selectedIndex', 0)
        $('.error_2').css('display', 'none')
    })
})

$(function () {
    $(".create_list_2").click(function () {
        let regExpFirst = /^\d{1,2}$/;
        let count = 0;
        let list = regExpFirst.test($("#list_ul")[0].value);
        if (!list) {
            $("#list_ul").css('box-shadow', '0px 0px 5px 1px #ac5c63');
            $('.error_3').css('display', 'flex')
            count++
        }
        else {
            $("#list_ul").css('border', '1px solid #d0d2d4');
            $("#list_ul").css('box-shadow', 'none');

        }
        if ($("#type_ul")[0].value == 'choose UI type mark') {
            $("#type_ul").css('box-shadow', '0px 0px 5px 1px #ac5c63');
            $('.error_3').css('display', 'flex')
            count++
        }
        else {
            $("#type_ul").css('border', '1px solid #d0d2d4');
            $("#type_ul").css('box-shadow', 'none');
        }
        if (count == 0) {
            let list = `<ul type="${$("#type_ul")[0].value}" >`;
            for (let i = 1; i <= $("#list_ul")[0].value; i++) {
                list += `<li >item ${i}</li>`;
            }
            list += "</ul>";
            $('.area')[0].value += list;
        }
    })

    $(".reset").click(function () {
        $("#list_ul").css('box-shadow', 'none');
        $("#type_ul").css('box-shadow', 'none');
        $(".form_5")[0].reset();
        $("#type_ul").prop('selectedIndex', 0)
        $('.error_3').css('display', 'none')
    })
})





