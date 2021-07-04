import telebot
from config import keys, TOKEN
from utils import ConvertionException, Cryptoconverter

bot = telebot.TeleBot(TOKEN)


@bot.message_handler(commands=['start', 'help'])
def help_(message: telebot.types.Message):
    text = 'Привет, это конвертер валют! Чтобы начать работу введите команду боту в следующем формате:\n <Количество переводимой валюты> <имя валюты> <в какую валюту перевести> \nУвидеть список всех доступных валют можешь тут: /values'
    bot.reply_to(message, text)


@bot.message_handler(commands=['values'])
def text(message: telebot.types.Message):
    text = 'Доступные валюты: '
    for key in keys.keys():
        text = '\n'.join((text, key,))
    bot.reply_to(message, text)


@bot.message_handler(content_types=['text', ])
def convert(message: telebot.types.Message):
    try:
        values = message.text.lower().split(' ')

        if len(values) != 3:
            raise ConvertionException('Нужно три параметра')

        amount, quote, base = values
        total_base = Cryptoconverter.convert(amount, quote, base)

    except ConvertionException as e:
        bot.reply_to(message, f'Ошибка пользователя.\n{e}')

    except Exception as e:
        bot.reply_to(message, f'Не удалось обработать команду\n{e}')
    else:
        text = f'Цена {amount} {quote} в {base} - {total_base * float(amount)}'
        bot.send_message(message.chat.id, text)


bot.polling()
