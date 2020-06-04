import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Inhalt')
    .items([
      S.listItem()
        .title('Einstellungen')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Artikel')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Artikel')),
      S.listItem()
        .title('Autoren')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Autoren')),
      S.listItem()
        .title('Kategorien')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategorien')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
