var DatatablesAdvancedFooterCalllback = {
    init: function () {
        $("#m_table_1").DataTable({
            responsive: !0,
            pageLength: 5,
            lengthMenu: [
                [2, 5, 10, 15, -1],
                [2, 5, 10, 15, "All"]
            ],
            footerCallback: function (t, e, n, a, r) {
                var o = this.api(),
                    l = function (t) {
                        return "string" == typeof t ? 1 * t.replace(/[\$,]/g, "") : "number" == typeof t ? t : 0
                    },
                    u = o.column(6).data().reduce(function (t, e) {
                        return l(t) + l(e)
                    }, 0),
                    i = o.column(6, {
                        page: "current"
                    }).data().reduce(function (t, e) {
                        return l(t) + l(e)
                    }, 0);
                $(o.column(6).footer()).html("$" + mUtil.numberString(i.toFixed(2)) + "<br/> ( $" + mUtil.numberString(u.toFixed(2)) + " total)")
            }
        })
    }
};
jQuery(document).ready(function () {
    DatatablesAdvancedFooterCalllback.init()
});
