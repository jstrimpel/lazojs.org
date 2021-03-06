define(['app/controller'],
    function (Ctl) {

    'use strict';

    return Ctl.extend({

        components: [
            { target: 'title', name: 'title' }
        ],

        index: function (options) {
            var self = this;

            options.ctx = {
                models: {},
                collections: {}
            };

            if (this.ctx.params.year) {
                return options.success(this.ctx.params.year + '/' + this.ctx.params.month + '/' +
                    this.ctx.params.day + '/' + this.ctx.params.title);
            }

            this.ctx.params.path = 'components/blog/views/';

            this.loadModel('content', {
                params: {
                    path: this.ctx.params.path + 'title.json'
                },
                success: function (model) {
                    self.ctx.models.title = model;
                    options.ctx.models.title = model;

                    Ctl.prototype.index.call(self, options);
                },
                error: options.error
            });

        }
    });
});