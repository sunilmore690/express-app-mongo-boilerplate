const getService = (Model = {}) => {
  const getData = (params, options) => {
    if (options) {
      return Model.paginate(params, options);
    }
    return Model.find(params);
  };
  const updateData = (params, data) => {
    return Model.update(params, { $set: data });
  };
  const getOne = params => {
    return Model.findOne(params);
  };
  const addData = data => {
    let model = new Model(data);
    return model.save();
  };

  return { getData, updateData, getOne, addData };
};
module.exports = getService;
