$(function() {
    // Subjects and their course numbers
    let courseNumber = [
        ["MA", ["100", "100E", "105", "110","111","112","115","122"]],
        ["AR", ["170", "200", "201","221","222","231","232","282"]],
        ["BI", ["101","102","111","112","200W","241"]],
        ["CH", ["101", "101L","102","102L","111","111L","112","112L","112H"]],
        ["COM", ["201","201H","205","215","230","243","303W"]],
        ["DA", ["291", "291","360","499","662"]],
        ["EC", ["251", "251H","252","341","480","491","692"]],
        ["EN", ["99","111","112","112H","211","212","221","222","222H","231","232","232H","255"]],
        ["FR", ["102","202","352","403W","495","499"]],
        ["GR", ["102","202","352","420","495"]],
    ];



    

$("#subjectName").on("change", function(e) {
        $("#courseNumber").prop("disabled", false);

        let inputVal = this.value;
        $.each(courseNumber, function(key, value) {
            if (inputVal === value[0]) {
                $.each(value, function(nestKey, nestValue) {

                    switch (nestKey) {
                        case 0:
                            $("label[for=courseNumber]").text(nestValue);
                            $("#courseNumber").empty();
                            $("#courseNumber").append(
                                $("<option>").text(`select a ${nestValue} `)
                            );
                            break;
                        case 1:
                            $.each(nestValue, function(numberKey, numberValue) {
                                console.log(numberKey, numberValue);

                                $("#courseNumber").append(
                                    $("<option>").val(numberValue).text(numberValue)
                                );
                            });
                            break;
                    }
                });
            }
        });
// submit that appends a new element with the search results 
    $("#submitButton").click(function () {
            var el = `<div style="width: 100%;">
            <div class="card" id=>
                <div class="card-body text-center">
                    <p class="card-text">
                        Subject: ${ $('#subjectName').find(":selected").text()}
                        Class: ${ $('#courseNumber').find(":selected").text()}
                   
                </div>
            </div>
          </div>`
        
          $('#searchResult').append(el);

    })
//     clears said newly created element 
    $('#resetButton').click(function(){
        $('#searchResult').empty();
  })

});
