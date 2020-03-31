var DatatablesAdvancedMultipleControls = {
    init: function () {
        $("#m_table_1").DataTable({
            /* For Search  and pagination */
            dom: `
            <'row'
            <'col-sm-12 col-md-6'l>
            <'col-sm-12 col-md-6'f>
            >
            <'row'
            <'col-sm-12 col-md-6'i>
            <'col-sm-12 col-md-6'p>
            >
            <'row'
            <'col-sm-12'tr>
            >
            <'row'
            <'col-sm-12 col-md-6'l>
            <'col-sm-12 col-md-6'f>
            >
            <'row'
            <'col-sm-12 col-md-5'i>
            <'col-sm-12 col-md-7'p>
            >
            `,

            
            columnDefs: [{
                targets: -1,
                title: "Actions",
                orderable: !1,
            }, {
                targets: 5,
            }]
        })
    }
};
jQuery(document).ready(function () {
    DatatablesAdvancedMultipleControls.init()
});
