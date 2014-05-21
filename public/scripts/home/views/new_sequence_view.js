define(function(require) {
  var Backbone    = require('backbone.mixed'),
      template    = require('hbars!home/templates/new_sequence_view'),
      Filetypes   = require('common/lib/filetypes/filetypes'),
      Gentle      = require('gentle')(),
      NewSequenceView;

  NewSequenceView = Backbone.View.extend({
    manage: true,
    template: template,
    className: 'home-new-sequence',

    events: {
      'submit .home-new-sequence-form': 'createNewSequenceFromText',
    },

    createNewSequenceFromText: function(event) {
      event.preventDefault();
      var $form     = $('.home-new-sequence-form').first(),
          text      = $form.find('[name=sequence]').val(),
          name      = $form.find('[name=name]').val() || 'Unnamed',
          sequences = Filetypes.guessTypeAndParseFromText(text, name);

      Gentle.addSequencesAndNavigate(sequences);
    }
  });

  return NewSequenceView;
});