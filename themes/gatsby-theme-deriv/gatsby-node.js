exports.onCreatePage = ({page, actions}, options) => {
    const {createPage, deletePage} = actions
    const {isEUPage} = options;

    deletePage(page)
    createPage({
        ...page,
        context: {
            ...page.context,
            isEUPage
        }
    })
}