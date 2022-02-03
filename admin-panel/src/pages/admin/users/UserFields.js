export default (i18n) => [
    {
        name: "id",
        title: () => i18n.t("user.table_id"),
        width:'5%',
       
    },
    {
        name: 'username',
        title:  () => i18n.t("user.table_name"),
        width: '12%'
     
    },
    {
        name: "full_name",
        title:  () => i18n.t("user.table_fullname"),
        width: '12%'

    },
    {
        name: "avatar",
        title:  () => i18n.t("user.table_icons"),
        width: '10%'

        

    },
    {
        name: "email",
        title:  () => i18n.t("user.table_email"),
        width: '15%'

        

    },
   {
        name: 'actions',
        title:  () => i18n.t("user.table_actions"),
        // title: '<span class="orange glyphicon glyphicon-user"></span> Actions',
        width: '15%',
    },
]