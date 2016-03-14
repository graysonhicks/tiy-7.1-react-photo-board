var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('../models/models.js');

var photoItem = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    console.log('photos item');
    return (
      <div className="thumbnail img-container">
        <img src={this.props.model.get("url")} />
        <div class="caption">
          <p className="thumbnail-caption-text">{this.props.model.get("caption")}</p>
          <p className="button-container"><a href="#" className="btn btn-primary" role="button"><i className="fa fa-facebook-square"></i></a> <a href="#" className="btn btn-default" role="button"><i className="fa fa-instagram"></i></a></p>
        </div>
      </div>
    )
  }
});

console.log('feedjsx test', photoItem);

var photosList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    console.log('photolist render');
    var feed = this.props.collection.map(function(model){
      return (
        <photoItem
          model={model}
          key={model.get('name')}
        /> // these set a model proprty on each instance with backbone model
      );
    });
    return (
      <div className="col-md-8 col-md-offset-2 img-feed">
        {feed}
      </div>
    )
  }
});

//handleSubmit: function(e){
//      var formData = $(e.currentTarget).serializeObject();
//      this.props.collection.create(formData);
//    }

module.exports = {
  photoItem: photoItem,
  photosList: photosList
}