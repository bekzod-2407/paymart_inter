
export default (i18n) => {
  return [
    {
      name: "id",
      title: () => i18n.t("category.table_id"),
      width: '70px',
    },
    {
      name: 'name',
      title: () => i18n.t("category.table_name"),
    },
    {
      name: "created_at",
      title: () => i18n.t("category.table_created"),
    },
    {
      name: 'actions',
      title: () => i18n.t("category.table_actions"),
      width: '120px',
      titleClass: "center aligned"
    },
  ]
}
