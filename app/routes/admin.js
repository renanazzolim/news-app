module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
    });

    application.post('/noticias/salvar', function (req, res) {
        // body parser -> npm install body-parser --save
        var noticia = req.body; 
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória').notEmpty();
        req.assert('noticia', 'Notícia é obrigatória').notEmpty();

        var errors = req.validationErrors();

        if (errors) {
            res.render('admin/form_add_noticia', {validacao: errors, noticia: noticia});
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });
}