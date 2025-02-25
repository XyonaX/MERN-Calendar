import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handlenNewEvent = () => {
        setActiveEvent({
            title: "",
            notes: "",
            start: new Date(2025, 1, 20, 8),
            end: addHours(new Date(2025, 1, 20, 8), 2),
            bgcolor: "#fafafa",
            user: {
                _id: "123",
                name: "Jonatan",
            },
        });
        openDateModal();
    };

    return (
        <button className='btn btn-primary fab' onClick={handlenNewEvent}>
            <i className='fas fa-plus'></i>
        </button>
    );
};
