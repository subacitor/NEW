
$(document).ready(function () {
    loadData();
    loadData2();

});

var arrEle;
function loadData() {
    $("#tblAct tbody").empty();
    var strResult = "";
    $.ajax(
        {
            url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar",
            type: "GET",
            dataType: "json",
            success: function (data) {
                arrEle = data;
                for (var i = 0; i < data.length; i++) {
                    strResult = strResult + "<tr>" +
                        "<td class='something' >" + data[i].time + "</td>" +
                        "<td>" + data[i].T2 + "</td>" +
                        "<td>" + data[i].T3 + "</td>" +
                        "<td>" + data[i].T4 + "</td>" +
                        "<td>" + data[i].T5 + "</td>" +
                        "<td>" + data[i].T6 + "</td>" +
                        "<td>" + data[i].T7 + "</td>" +
                        "<td>" + data[i].CN + "</td>" +
                        "<td>" +
                        '<img id="editIMG" class="actionIcon" src="download.png" onclick="editE(' + data[i].id + ')" alt="Edit" srcset=" ">' + 
                        '<img class="actionIcon" src="2496733.png" onclick="deleteE(' + data[i].id + ')" alt="Delete" srcset=" ">' +
                        "</td>" +
                        "</tr>";
                }
                console.log(strResult);
                $("#tblAct tbody").append(strResult);
            }
        }
    );
}

// ==========================================================================================================================================

var arrEle2;
function loadData2() {
    $("#tblAct2 tbody").empty();
    var strResult2 = "";
    var strResult3 = "";
    var strResult4 = "";
    var strResult5 = "";
    var strResult6 = "";
    var strResult7 = "";
    var strResultCN = "";
    $.ajax(
        {
            url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar",
            type: "GET",
            dataType: "json",
            success: function (data) {
                arrEle2 = data;
                for (var i = 0; i < data.length; i++) {
                    strResult2 = strResult2 +
                        "<td>" + "<span class='data-time'>" + data[i].time + "</span>" + "<br>" + data[i].T2 + "</td>"
                    strResult3 = strResult3 +
                        "<td>" +"<span class='data-time'>" + data[i].time + "</span>" + "<br>" + data[i].T3 + "</td>"
                    strResult4 = strResult4 +
                        "<td>" + "<span class='data-time'>" + data[i].time + "</span>" + "<br>" + data[i].T4 + "</td>"
                    strResult5 = strResult5 +
                        "<td>" + "<span class='data-time'>" + data[i].time + "</span>" + "<br>" + data[i].T5 + "</td>"
                    strResult6 = strResult6 +
                        "<td>" + "<span class='data-time'>" + data[i].time + "</span>" + "<br>" + data[i].T6 + "</td>"
                    strResult7 = strResult7 +
                        "<td>" + "<span class='data-time'>" + data[i].time + "</span>" + "<br>" + data[i].T7 + "</td>"
                    strResultCN = strResultCN +
                        "<td>" + "<span class='data-time'>" + data[i].time + "</span>" + "<br>" + data[i].CN + "</td>"
                };

                console.log(strResult2);
                $(".thu-2").append(strResult2);
                $(".thu-3").append(strResult3);
                $(".thu-4").append(strResult4);
                $(".thu-5").append(strResult5);
                $(".thu-6").append(strResult6);
                $(".thu-7").append(strResult7);
                $(".cn").append(strResultCN);
            }
        }
    );
}
// ========================================================================================================
$("#btnModalAdd").click(function () {
    var data = {};
    data.T2 = $("#T2").val();
    data.T3 = $("#T3").val();
    data.T4 = $("#T4").val();
    data.T5 = $("#T5").val();
    data.T6 = $("#T6").val();
    data.T7 = $("#T7").val();
    data.CN = $("#CN").val();
    data.time = $("#time").val();

    $.ajax({
        url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar",
        type: "POST",
        data: data,
        success: function (result) {
            $("#form-to-add").css("display", "none");
            $("#tbody").empty();
            loadData();
        }
    })
    console.log(data);
});
$("#btnModalUpdate").click(function(){
    var dataUpdate = {};
    dataUpdate.T2 = $("#T2Update").val();
    dataUpdate.T3 = $("#T3Update").val();
    dataUpdate.T4 = $("#T4Update").val();
    dataUpdate.T5 = $("#T5Update").val();
    dataUpdate.T6 = $("#T6Update").val();
    dataUpdate.T7 = $("#T7Update").val();
    dataUpdate.CN = $("#CNUpdate").val();
    dataUpdate.time = $("#timeUpdate").val();
    var id = $("#txtId").val();
    console.log(dataUpdate);

    $.ajax({
        url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar/" + id,
        type: "PUT",
        data: dataUpdate,
        success: function () {
            //dong form
            $("#ModalEdit").css("display", "none");
            loadData();
        }
    })
});

// ============================================================
//Delete Function
function deleteE(id) {
    $.ajax({
        url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar/" + id,
        type: "DELETE",
        success: function (data) {
            console.log(data);
            loadData();
        }
    })
}

// ============================================================
//Edit Function

function editE(id){
    $("#ModalEdit").css("display", "block");
    for (var i = 0; i < arrEle.length; i++) {

        if (arrEle[i].id == id) {
            $("#txtId").val(arrEle[i].id);
            $("#T2Update").val(arrEle[i].T2);
            $("#T3Update").val(arrEle[i].T3);
            $("#T4Update").val(arrEle[i].T4);
            $("#T5Update").val(arrEle[i].T5);
            $("#T6Update").val(arrEle[i].T6);
            $("#T7Update").val(arrEle[i].T7); 
            $("#CNUpdate").val(arrEle[i].CN);
            $("#timeUpdate").val(arrEle[i].time);
            break;
        }
    }
    loadData();
}
$("#editIMG").click(function(){
    $("#ModalEdit").css("display","block");
})
$("#btnModalCancelEdit").click(function(){
    $("#ModalEdit").css("display","none");
})

$("#addModal").click(function () {
    $("#form-to-add").css("display", "block");
})
$("#btnModalCancel").click(function () {
    $("#form-to-add").css("display", "none");
})
