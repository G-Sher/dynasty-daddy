import Model from '../models/model';

const playersModel = new Model('ktc_players');

export const getCurrentPlayerValues = async (req, res) => {
  try {
    let data = await playersModel.select('*', ' WHERE date::date = now()::date order by sf_trade_value desc ');
    if (data.rows.length === 0) {
      data = await playersModel.select('*', ' WHERE date::date = (NOW() - interval \'1 day\')::date order by sf_trade_value desc ');
    }
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(405).json(err.stack);
  }
};

export const getHistoricalPlayerValueById = async (req, res) => {
  try {
    let id = req.params.id;
    const data = await playersModel.select('*', ` WHERE name_id = \'${id}\'`);
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(405).json(err.stack);
  }
};
