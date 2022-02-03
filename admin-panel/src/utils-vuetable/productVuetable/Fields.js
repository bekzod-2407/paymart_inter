export default (i18n) => {
  return[
    {
      name: 'images',
      title: "",
      width: '10%',
    },
    {
      name: 'product',
      title: () => i18n.t('products.product'),
      width: '14%'
    },
   
    {
      name: "category.name",
      title: () => i18n.t('products.category'),
      width: '10%'
    },
    {
        name: "price",
        title: () => i18n.t('products.price'),
        width: '10%'
      },
    {
        name: "quantity",
        title: () => i18n.t('products.count'),
        width: '10%'
      },
    {
        name: "amount",
        title: () => i18n.t('products.amount'),
        width: '10%'
      },
    {
        name: "cart",
        title: () => i18n.t('products.toCart'),
        width: '6%'
      },
    
  ]}