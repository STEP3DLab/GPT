# Обработчики команд и кнопок
from aiogram import Router

def register_handlers(dp):
    router = Router()
    # Тут будет регистрация всех хендлеров
    dp.include_router(router)