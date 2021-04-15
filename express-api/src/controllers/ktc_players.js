import Model from '../models/model';

const playersModel = new Model('ktc_players');

export const getCurrentPlayerValues = async (req, res) => {
  try {
    let data = await playersModel.select('*', ' WHERE date::date = now()::date');
    if(data.rows.length == 0){
      data = await playersModel.select('*', ' WHERE date::date = (NOW() - interval \'1 day\')::date');
    }
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(200).json(err.stack);
  }
};

export const getHistoricalPlayerValueById = async (req, res) => {
  try {
    let id = req.params.id;
    const data = await playersModel.select('*', ` WHERE sleeper_id = ${id}`);
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(200).json(err.stack);
  }
};
