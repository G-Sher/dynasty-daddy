import Model from '../models/model';

const playersModel = new Model('ktc_players');

export const getCurrentPlayerValues = async (req, res) => {
  try {
    const data = await playersModel.selectSubQuery('*', '(\n'
      + '    select distinct on (name_id) * \n'
      + '    from ktc_players \n'
      + '    order by name_id, id desc \n'
      + ') as T \n'
      + '  order by sf_trade_value desc  ');
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(405).json(err.stack);
  }
};

export const getLastMonthPlayerValues = async (req, res) => {
  try {
    const data = await playersModel.select(
      '*',
      ' WHERE date::date = now()::date - 30 order by sf_trade_value desc '
    );
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(405).json(err.stack);
  }
};

export const getHistoricalPlayerValueById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await playersModel.select('*', ` WHERE name_id = '${id}'`);
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(405).json(err.stack);
  }
};
