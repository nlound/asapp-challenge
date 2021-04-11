import "./Item.scss";
import { ListItem } from "../../interfaces";
import axios from "axios";
import { endpoint } from "../../endpoints";

const Item = (props: { items: ListItem[] }) => {
  const saveCity = async (geonameId: string, itemState: boolean) => {
    try {
      await axios.patch(endpoint.preferences(), { [geonameId]: itemState });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {props.items.map((e, k) => {
        return (
          <li className="city_item" key={k}>
            <input
              className="city_item--checkbox"
              type="checkbox"
              value={e.geonameid}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>
              ): Promise<void> => {
                return saveCity(e.target.value, e.target.checked);
              }}
            />
            <div>
              <p className="city_item--name">{e.name}</p>
              <p className="city_item--description">
                {e.subcountry} - {e.country}
              </p>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Item;
