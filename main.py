# Запуск бота STEP_3D
from handlers import register_handlers
from aiogram import Bot, Dispatcher
from config import TOKEN

bot = Bot(token=TOKEN)
dp = Dispatcher()

register_handlers(dp)

if __name__ == '__main__':
    import asyncio
    asyncio.run(dp.start_polling(bot))