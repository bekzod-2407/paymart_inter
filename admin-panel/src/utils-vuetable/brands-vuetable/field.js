export default (i18n) =>{
  return[
    {
      name:'id',
      title:()=> i18n.t('brandsHeaders.id'),
      width:'10%'
    },
    {
      name: 'name',
      title:()=>i18n.t('brandsHeaders.name'),
    },
    {
      name:'actions',
      title:()=>i18n.t('brandsHeaders.actions'),
      width:'20%'
    }
  ]
}