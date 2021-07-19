
for (let i = 0; i < query.length; i++) {
    //console.log(query[i]);

    $('#mc').append(`
            <div class="container">
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
            </div>
            <div class="container">
                <h2 class="font-weight-bold">`+query[i]["category"]+`</h2>
            </div>
    `);             
    
    let currentData = query[i].data;
    
    for (let j = 0; j < currentData.length; j++){
        $('#mc').append(`
            <div class="container">
                <div class="row">&nbsp;</div>
            </div>
            <div class="container" id="pre`+currentData[j].pre+`">
                <h2>Вопрос №`+ (j + 1)+`</h2>
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
                <div class="row">
                    <div class="text-center">
                        <h2>`+currentData[j].question+`</h2>
                    </div>
                </div>
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
                <div class="row">&nbsp;</div>
                        <section style="border: 1px solid #e0e0e0; padding: 15px;" class="text-center" id="id_` + query[i].id + '_' + j +`_but">

                        </section>
                        <div class="row">&nbsp;</div>
                        <div class="row">&nbsp;</div>
                        <div class="row">&nbsp;</div>
            </div>
        `);

        let currentAnswers = currentData[j].answer;
        //let checked = true;
        for (let f = 0; f < currentAnswers.length; f++){

            $('#id_'+query[i].id + '_' + j +'_but').append(`
                <div class="form-check form-check-inline">
                    <h4>
                        <input type="radio" class="form-check-input" name="answer_` + i + '_' + j + `" id="q` + i + '_' + j + '_' + f + `" value="` + currentAnswers[f].val.value +`">
                        <label class="form-check-label radio-inline" for="q` + i + '_' + j + '_' + f + `">` + currentAnswers[f][f+1] +`</label>
                    </h4>
                </div>
            `);
            //checked = false;
        }
    }
}

//$('#pre1').css("display", "block");

    /*
    $(document).ready(function(){
        $("input[type='button']").click(function(){
            var radioValue = $("input[name='gender']:checked").val();
            if(radioValue){
                alert("Your are a - " + radioValue);
            }
        });
    });
    */
$(document).ready(function(){
    $('#calc').on('click', function(){
        let sum = 0;
        let anyChecked = false;
        $("input:checked").each(function() {
            sum += parseFloat($(this)[0].value);
            anyChecked = true;
        });
        console.log(sum);
        let total;
        total = sum.toFixed(2);
        if (!anyChecked){
            if ($('#resultid').html() != ''){
                $('#resultid').replaceWith('<span id="resultid">Не выбран ни один ответ</span>');
            }
            else{
                $('#resultid').append("Не выбран ни один ответ" );
            }               
        } else {
            if ($('#resultid').html() != ''){
                $('#resultid').replaceWith('<span id="resultid">'+ total +'</span>');
            }
            else{
                $('#resultid').append(total);
            }       
        }
    });
});
