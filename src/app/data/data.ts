interface Post {
    id: number;
    title: string;
    body: string;
    category?: string; // Добавлено новое поле для категоризации
}

export const mockPosts: Post[] = [
    // Блок 1: Денежно-кредитная политика и финансы
    {
        id: 1,
        title: 'ЦБ РФ повысил ключевую ставку до 8.5% для борьбы с инфляцией',
        body: 'На заседании 15 сентября 2025 года Центральный Банк России принял решение повысить ключевую ставку на 0.5 процентных пункта до 8.5% годовых...',
        category: 'Финансы'
    },
    {
        id: 13,
        title: 'ФРС США оставила ставку без изменений на уровне 5.25-5.5%',
        body: 'Федеральная резервная система США на сентябрьском заседании сохранила целевую ставку в диапазоне 5.25-5.5% годовых...',
        category: 'Финансы'
    },
    {
        id: 8,
        title: 'Китай сокращает ставку резервирования для банков до 9.5%',
        body: 'Народный банк Китая объявил о снижении нормы обязательных резервов для коммерческих банков на 0.25 процентных пункта до 9.5%...',
        category: 'Финансы'
    },

    // Блок 2: Внешняя торговля и международные отношения
    {
        id: 3,
        title: 'Россия и Китай договорились о расчетах в национальных валютах на 85%',
        body: 'По итогам российско-китайского экономического форума стороны объявили о расширении использования национальных валют в двусторонней торговле...',
        category: 'Торговля'
    },
    {
        id: 9,
        title: 'ЕАЭС согласовал новые тарифы на импорт промышленного оборудования',
        body: 'Совет Евразийской экономической комиссии утвердил новые ставки ввозных таможенных пошлин на промышленное оборудование...',
        category: 'Торговля'
    },
    {
        id: 14,
        title: 'Российский экспорт сельхозпродукции вырос на 18% за год',
        body: 'По данным Минсельхоза, экспорт российской сельскохозяйственной продукции за 8 месяцев 2025 года составил $35 млрд...',
        category: 'Торговля'
    },

    // Блок 3: Государственная поддержка бизнеса
    {
        id: 2,
        title: 'Минфин анонсирует новый пакет мер поддержки малого бизнеса',
        body: 'Министерство финансов России готовит комплекс мер по поддержке малого и среднего бизнеса...',
        category: 'Бизнес'
    },
    {
        id: 15,
        title: 'Минпромторг запускает программу льготного кредитования для экспортеров',
        body: 'Министерство промышленности и торговли РФ с 1 октября 2025 года запускает новую программу льготного кредитования...',
        category: 'Бизнес'
    },
    {
        id: 5,
        title: 'ФНС: Налоговые поступления выросли на 12% за 8 месяцев 2025 года',
        body: 'Федеральная налоговая служба сообщает о росте налоговых поступлений в консолидированный бюджет на 12%...',
        category: 'Бизнес'
    },

    // Блок 4: Макроэкономические показатели
    {
        id: 7,
        title: 'Минэкономразвития повысило прогноз роста ВВП на 2025 год до 2.8%',
        body: 'Министерство экономического развития РФ скорректировало прогноз роста ВВП на 2025 год с 2.3% до 2.8%...',
        category: 'Макроэкономика'
    },
    {
        id: 12,
        title: 'Минтруд: Реальные доходы населения выросли на 4.5% за год',
        body: 'По данным Минтруда, реальные располагаемые доходы россиян за январь-август 2025 года увеличились на 4.5%...',
        category: 'Макроэкономика'
    },
    {
        id: 4,
        title: 'Инфляция в еврозоне замедлилась до 2.1% в августе',
        body: 'Евростат опубликовал данные по инфляции в еврозоне за август 2025 года: показатель составил 2.1% в годовом выражении...',
        category: 'Макроэкономика'
    },

    // Блок 5: Рынки и инвестиции
    {
        id: 6,
        title: 'Курс доллара опустился ниже 90 рублей впервые с апреля 2025',
        body: 'На Московской бирже курс доллара к рублю впервые за пять месяцев опустился ниже отметки 90 рублей...',
        category: 'Рынки'
    },
    {
        id: 11,
        title: 'ОПЕК+ согласовала сокращение добычи нефти на 1 млн баррелей в сутки',
        body: 'Страны ОПЕК+ на заседании 5 сентября договорились о дополнительном сокращении добычи нефти на 1 млн баррелей в сутки...',
        category: 'Рынки'
    },
    {
        id: 10,
        title: 'Российские банки увеличили выдачу ипотеки на 25% за год',
        body: 'По данным ЦБ РФ, объем выданной ипотеки в России за август 2025 года составил 320 млрд рублей...',
        category: 'Рынки'
    },

    // Блок 6: Социальная сфера и потребление
    {
        id: 16,
        title: 'Турпоток в Россию вырос на 30% за летний сезон 2025 года',
        body: 'По данным Ростуризма, за летние месяцы 2025 года Россию посетили 8.5 млн иностранных туристов...',
        category: 'Социальная сфера'
    }
];