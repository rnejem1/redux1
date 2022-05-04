const getTemplatesFromImport = () => {
    const link = document.querySelector('link[rel="import"]');
    if( ! link ) throw `Import link tag not found`;
    return Array.from( link.import.querySelectorAll('template') );
}

export default () => {
    const templates = getTemplatesFromImport();
    return templateId => {
        const selectedTemplate = templates.filter( template => template.id === templateId )
        if( ! selectedTemplate.length ) throw `Template ${templateId} not found`;
        if( selectedTemplate.length > 1 ) throw `Found multiple templates with id: ${templateId}`;
        return selectedTemplate.pop();
    }
}