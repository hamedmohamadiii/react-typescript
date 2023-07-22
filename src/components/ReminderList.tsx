import Reminder from "../models/remider";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = (props: ReminderListProps) => {
  return (
    <>
      <ul className="list-group">
        {props.items.map((items) => (
          <li className="list-group-item " key={items.id}>
            {" "}
            {items.title}{" "}
            <button
              className="btn btn-outline-danger mx-2"
              onClick={() => props.onRemoveReminder(items.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReminderList;
