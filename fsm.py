# FSM-форма для заявки
from aiogram.fsm.state import State, StatesGroup

class OrderForm(StatesGroup):
    name = State()
    email = State()
    phone = State()
    service = State()
    comment = State()
    file = State()
    confirm = State()