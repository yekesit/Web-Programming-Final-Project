(function($){
    $(`.imgInput`).on('change',function(){
        let self = this;
        // $(self).parent().find('input').css('display','none');
        $(self).css('display','none');
        let formData = new FormData();
        formData.append('file', this.files[0]);
        $.ajax({
            url: '/recipes/upload',
            type: 'POST',
            data :formData,
            cache:false,
            processData: false,
            contentType: false,
            success:function(data){
                if(data.code === 200){
                    $(self).parent().find('img').attr('src', data.data);
                }else{
                }
            },
            error:function(){
            }
        });
    });


    $("#add-step").on('click',function(){
        const new_step = '<div class="upload-content">\n' +
            '                <label for="instruction">\n' +
            '                    <input name="instruction" placeholder="step instruction">\n' +
            '                </label>\n' +
            '                <div class="steps">\n' +
            '                    <span class="upload-text">\n' +
            '                        Click here to upload picture\n' +
            '                    </span>\n' +
            '                    <img class="upload-preview" src="" width="320" height="240">\n' +
            '                </div>\n' +
            '            </div>';
        let step_list = $(".upload-list");
        step_list.append(new_step);
        let input = document.createElement('input');
        input.setAttribute('type', 'file');
        $('.steps').on('click',function(){
            let ele = this;
            // $('#inputBox').append(input);
            $(input).on('change', function(){
                let formData = new FormData();
                formData.append('file', input.files[0]);
                $.ajax({
                    url: '/recipes/upload',
                    type: 'POST',
                    data :formData,
                    cache:false,
                    processData: false,
                    contentType: false,
                    success:function(data){
                        if(data.code === 200){
                            $(ele).find('img').attr('src', data.data);
                            $(ele).find('img').css('display', 'block');
                            $(ele).find('span').remove();
                        }else{
                        }
                    },
                    error:function(){
                    }
                });
            });
            input.click();
            input.empty();
            // $('#inputBox').empty();
        });

    });

    $('.upload-picture').on('click',function(){
        let input = document.createElement('input');
        input.setAttribute('type', 'file');
        let ele = this;
        // $('#inputBox').append(input);
        $(input).on('change', function(){
            let formData = new FormData();
            formData.append('file', input.files[0]);
            $.ajax({
                url: '/recipes/upload',
                type: 'POST',
                data :formData,
                cache:false,
                processData: false,
                contentType: false,
                success:function(data){
                    if(data.code === 200){
                        $(ele).find('img').attr('src', data.data);
                        $(ele).find('img').css('display', 'block');
                        $(ele).find('span').remove();
                    }else{
                    }
                },
                error:function(){
                }
            });
        });
        input.click();
        // $('#inputBox').empty();
    });

    $("#add-ingredient").on('click',function(){
        const new_ingredient = '<li>\n' +
            '                    <label for="name">\n' +
            '                        <input name="name">\n' +
            '                    </label>\n' +
            '                    <label for="amount">\n' +
            '                        <input name="amount">\n' +
            '                    </label>\n' +
            '                </li>';
        $('.ingredient-list').append(new_ingredient);
    });

    $(".like").click(function () {
        const url = window.location.href;
        $.ajax({
            url: url,
            type: 'POST',
            cache:false,
            processData: false,
            contentType: false,
            success:function(data){
            },
            error:function(){
            }
        });
        $(this).toggleClass('cs');

    })

})(jQuery);