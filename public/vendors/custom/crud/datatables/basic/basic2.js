var DatatablesBasicBasic = {
    init: function () {
        var e;
        (e = $("#m_table_1")).DataTable({
            responsive: !0,
            dom: "<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
            lengthMenu: [5, 10, 25, 50],
            pageLength: 10,
            language: {
                lengthMenu: "Display _MENU_"
            },
            order: [
                [1, "desc"]
            ],
            headerCallback: function (e, a, t, n, s) {
                e.getElementsByTagName("th")[0].innerHTML = '\n                    <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">\n                        <input type="checkbox" value="" class="m-group-checkable">\n                        <span></span>\n                    </label>'
            },
            columnDefs: [{
                targets: 0,
                width: "30px",
                className: "dt-right",
                orderable: !1,
                render: function (e, a, t, n) {
                    return '\n                        <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">\n                            <input type="checkbox" value="" class="m-checkable">\n                            <span></span>\n                        </label>'
                }
            }, {
                targets: -1,
                title: "Actions",
                orderable: !1,
                render: function (e, a, t, n) {
                    return '\n<div class="container" id="accordionCus">\n <div class="row">\n<div class="col-12">\n<p><b>Tenant :</b><span>you can add your text here</span></p>\n</div>\n<div class="col-12">\n<p><b>Group :</b><span>you can add your text here</span></p>\n</div>\n<div class="col-12">\n<p><b>From :</b><span>you can add your text here</span></p>\n</div>\n<div class="col-12">\n<p><b>To :</b><span>you can add your text here</span></p>\n</div>\n<div class="col-12">\n<p><b>Date/Time :</b><span>Feb 13,2018 9:33:03 PM</span></p>\n</div>\n<div class="col-12">\n<p><b>Duration :</b></p>\n<audio controls>\n<source src="horse.ogg" type="audio/ogg">\n<source src="horse.mp3" type="audio/mpeg">\nYour browser does not support the audio tag.\n</audio>\n</div>\n<div class="col-12">\n<p><b>User Rating :</b></p>\n<span class="fa fa-star checked"></span>\n<span class="fa fa-star checked"></span>\n<span class="fa fa-star checked"></span>\n<span class="fa fa-star checked"></span>\n<span class="fa fa-star "></span>\n<p>4.1 average based on 254 reviews.</p>\n</div>\n<div class="col-12">\n<div class="notebox">\n<div class="row">\n<div class="col-1">\n<p class="noteTitle"><b>Notes:</b></p>\n</div>\n<div class="col-10">\n<div class="note">\n<p><b class="userName">Demo user</b><span class="history">Mar 3,2019 4:01:55 PM</span></p>\n<hr>\n<p class="noteContent">You can add here your notes</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class="col-12">\n<form action="">\n<textarea placeholder="write your note" rows="5"></textarea>\n<input type="submit" name="" value="save" class="saveBtn">\n<input type="submit" name="" value="cancel" class="cancelBtn">\n</form>\n</div>\n</div>\n</div>\n'
                }
            }, {
                targets: 8,
                render: function (e, a, t, n) {
                    var s = {
                        1: {
                            title: "Pending",
                            class: "m-badge--brand"
                        },
                        2: {
                            title: "Delivered",
                            class: " m-badge--metal"
                        },
                        3: {
                            title: "Canceled",
                            class: " m-badge--primary"
                        },
                        4: {
                            title: "Success",
                            class: " m-badge--success"
                        },
                        5: {
                            title: "Info",
                            class: " m-badge--info"
                        },
                        6: {
                            title: "Danger",
                            class: " m-badge--danger"
                        },
                        7: {
                            title: "Warning",
                            class: " m-badge--warning"
                        }
                    };
                    return void 0 === s[e] ? e : '<span class="m-badge ' + s[e].class + ' m-badge--wide">' + s[e].title + "</span>"
                }
            }, {
                targets: 9,
                render: function (e, a, t, n) {
                    var s = {
                        1: {
                            title: "Online",
                            state: "danger"
                        },
                        2: {
                            title: "Retail",
                            state: "primary"
                        },
                        3: {
                            title: "Direct",
                            state: "accent"
                        }
                    };
                    return void 0 === s[e] ? e : '<span class="m-badge m-badge--' + s[e].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + s[e].state + '">' + s[e].title + "</span>"
                }
            }]
        }), e.on("change", ".m-group-checkable", function () {
            var e = $(this).closest("table").find("td:first-child .m-checkable"),
                a = $(this).is(":checked");
            $(e).each(function () {
                a ? ($(this).prop("checked", !0), $(this).closest("tr").addClass("active")) : ($(this).prop("checked", !1), $(this).closest("tr").removeClass("active"))
            })
        }), e.on("change", "tbody tr .m-checkbox", function () {
            $(this).parents("tr").toggleClass("active")
        })
    }
};
jQuery(document).ready(function () {
    DatatablesBasicBasic.init()
});
