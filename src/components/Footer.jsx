import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8  ">
      <div className="container max-w-[1240px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">О нас</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Пункты выдачи</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Вакансии</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Пользователям</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Связаться с нами</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Вопрос - Ответ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Для предпринимателей</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Продавайте на Uzum</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-800">Вход для продавцов</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Скачать приложение</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-800"> <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="AppStore" className="w-6 h-6" /> </a>
            <a href="#" className="text-gray-600 hover:text-gray-800"> <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-6 h-6" /> </a>
          </div>
          <h3 className="text-lg font-semibold mb-4">Uzum в соцсетях</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6" /> </a>
            <a href="#" className="text-gray-600 hover:text-gray-800"> <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-6 h-6" /> </a>
            <a href="#" className="text-gray-600 hover:text-gray-800"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6" /> </a>
            <a href="#" className="text-gray-600 hover:text-gray-800"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="w-6 h-6" /> </a>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-4 container max-w-[1240px] mx-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            <a href="#" className="hover:text-gray-800">Соглашение о конфиденциальности</a> | <a href="#" className="hover:text-gray-800">Пользовательское соглашение</a>
          </div>
          <div className="text-gray-600 text-sm mt-4 md:mt-0">
            &copy; 2024 ООО «UZUM MARKET». ИНН 309376127. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
