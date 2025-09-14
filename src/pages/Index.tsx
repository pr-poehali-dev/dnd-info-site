import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const DnDSite = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Пример данных для разделов
  const spells = [
    { name: 'Огненный шар', level: 3, school: 'Воплощение', damage: '8d6', range: '150 футов' },
    { name: 'Лечение ран', level: 1, school: 'Воплощение', damage: '1d8+спел', range: 'Касание' },
    { name: 'Магическая стрела', level: 1, school: 'Воплощение', damage: '1d4+1', range: '120 футов' },
    { name: 'Щит', level: 1, school: 'Ограждение', damage: 'Защита', range: 'Я' }
  ];

  const characters = [
    { name: 'Арагорн', race: 'Человек', class: 'Следопыт', level: 10, hp: 87 },
    { name: 'Гэндальф', race: 'Майар', class: 'Волшебник', level: 20, hp: 165 },
    { name: 'Леголас', race: 'Эльф', class: 'Следопыт', level: 12, hp: 96 }
  ];

  const equipment = [
    { name: 'Длинный меч +1', type: 'Оружие', damage: '1d8+1', weight: '3 фунта', cost: '1500 зм' },
    { name: 'Кольчуга', type: 'Доспех', ac: '16', weight: '55 фунтов', cost: '750 зм' },
    { name: 'Зелье лечения', type: 'Зелье', effect: 'Восстанавливает 2d4+2 ОЗ', weight: '0.5 фунта', cost: '50 зм' }
  ];

  const races = [
    { name: 'Человек', traits: 'Универсальность, +1 ко всем характеристикам', size: 'Средний', speed: '30 футов' },
    { name: 'Эльф', traits: 'Темное зрение, Обостренные чувства', size: 'Средний', speed: '30 футов' },
    { name: 'Дварф', traits: 'Темное зрение, Стойкость дварфов', size: 'Средний', speed: '25 футов' },
    { name: 'Халфлинг', traits: 'Удачливость, Храбрость', size: 'Маленький', speed: '25 футов' }
  ];

  const classes = [
    { name: 'Воин', hitDie: 'd10', primaryAbility: 'Сила или Ловкость', saves: 'Сила, Телосложение' },
    { name: 'Волшебник', hitDie: 'd6', primaryAbility: 'Интеллект', saves: 'Интеллект, Мудрость' },
    { name: 'Плут', hitDie: 'd8', primaryAbility: 'Ловкость', saves: 'Ловкость, Интеллект' },
    { name: 'Жрец', hitDie: 'd8', primaryAbility: 'Мудрость', saves: 'Мудрость, Харизма' }
  ];

  const monsters = [
    { name: 'Дракон', cr: '17', hp: '256', ac: '19', type: 'Дракон' },
    { name: 'Гоблин', cr: '1/4', hp: '7', ac: '15', type: 'Гуманоид' },
    { name: 'Орк', cr: '1/2', hp: '15', ac: '13', type: 'Гуманоид' }
  ];

  const filterData = (data: any[], searchField: string) => {
    return data.filter(item => 
      item[searchField].toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-charcoal to-brown text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 text-gold">
            DUNGEONS & DRAGONS
          </h1>
          <p className="text-xl mb-8 text-parchment">
            Погрузитесь в мир магии, приключений и бесконечных возможностей
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gold hover:bg-yellow-600 text-black font-bold px-8 py-3">
              <Icon name="Sword" className="mr-2" size={20} />
              Начать приключение
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Изучить правила
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-brown text-white py-4">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-6">
            {['Правила', 'Персонажи', 'Кампании', 'Бестиарий', 'Заклинания', 'Снаряжение', 'Расы', 'Классы'].map((item) => (
              <Button key={item} variant="ghost" className="text-white hover:text-gold hover:bg-transparent">
                {item}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <Input
              type="text"
              placeholder="Поиск по всем разделам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-brown"
            />
          </div>
          <Select value={activeFilter} onValueChange={setActiveFilter}>
            <SelectTrigger className="w-[180px] bg-white border-brown">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все разделы</SelectItem>
              <SelectItem value="spells">Заклинания</SelectItem>
              <SelectItem value="equipment">Снаряжение</SelectItem>
              <SelectItem value="monsters">Монстры</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="spells" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-white border border-brown">
            <TabsTrigger value="spells">Заклинания</TabsTrigger>
            <TabsTrigger value="characters">Персонажи</TabsTrigger>
            <TabsTrigger value="equipment">Снаряжение</TabsTrigger>
            <TabsTrigger value="races">Расы</TabsTrigger>
            <TabsTrigger value="classes">Классы</TabsTrigger>
            <TabsTrigger value="monsters">Бестиарий</TabsTrigger>
          </TabsList>

          {/* Spells Tab */}
          <TabsContent value="spells">
            <Card className="border-brown">
              <CardHeader className="bg-gold text-black">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" size={24} />
                  Заклинания
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Полный список заклинаний с поиском и фильтрами
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Название</TableHead>
                      <TableHead>Уровень</TableHead>
                      <TableHead>Школа</TableHead>
                      <TableHead>Урон/Эффект</TableHead>
                      <TableHead>Дистанция</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filterData(spells, 'name').map((spell, index) => (
                      <TableRow key={index} className="hover:bg-parchment/30">
                        <TableCell className="font-medium">{spell.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-gold text-gold">
                            {spell.level}
                          </Badge>
                        </TableCell>
                        <TableCell>{spell.school}</TableCell>
                        <TableCell>{spell.damage}</TableCell>
                        <TableCell>{spell.range}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Characters Tab */}
          <TabsContent value="characters">
            <Card className="border-brown">
              <CardHeader className="bg-gold text-black">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={24} />
                  Персонажи
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Управление персонажами и их характеристиками
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterData(characters, 'name').map((char, index) => (
                    <Card key={index} className="border-2 border-brown/30 hover:border-gold transition-colors">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{char.name}</CardTitle>
                        <CardDescription>{char.race} • {char.class}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Уровень:</span>
                          <Badge className="bg-gold text-black">{char.level}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Очки здоровья:</span>
                          <Badge variant="outline" className="border-red-500 text-red-600">{char.hp}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Equipment Tab */}
          <TabsContent value="equipment">
            <Card className="border-brown">
              <CardHeader className="bg-gold text-black">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sword" size={24} />
                  Снаряжение
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Оружие, доспехи и магические предметы
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Предмет</TableHead>
                      <TableHead>Тип</TableHead>
                      <TableHead>Характеристики</TableHead>
                      <TableHead>Вес</TableHead>
                      <TableHead>Стоимость</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filterData(equipment, 'name').map((item, index) => (
                      <TableRow key={index} className="hover:bg-parchment/30">
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{item.type}</Badge>
                        </TableCell>
                        <TableCell>{item.damage || item.ac || item.effect}</TableCell>
                        <TableCell>{item.weight}</TableCell>
                        <TableCell className="font-semibold">{item.cost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Races Tab */}
          <TabsContent value="races">
            <Card className="border-brown">
              <CardHeader className="bg-gold text-black">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Crown" size={24} />
                  Расы
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Игровые расы и их особенности
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {filterData(races, 'name').map((race, index) => (
                    <Card key={index} className="border border-brown/30">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-charcoal">{race.name}</h3>
                          <div className="flex gap-2">
                            <Badge variant="outline">{race.size}</Badge>
                            <Badge variant="outline">{race.speed}</Badge>
                          </div>
                        </div>
                        <p className="text-gray-700">{race.traits}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Classes Tab */}
          <TabsContent value="classes">
            <Card className="border-brown">
              <CardHeader className="bg-gold text-black">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" size={24} />
                  Классы
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Классы персонажей и их способности
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Класс</TableHead>
                      <TableHead>Кость здоровья</TableHead>
                      <TableHead>Основная характеристика</TableHead>
                      <TableHead>Спасброски</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filterData(classes, 'name').map((cls, index) => (
                      <TableRow key={index} className="hover:bg-parchment/30">
                        <TableCell className="font-medium">{cls.name}</TableCell>
                        <TableCell>
                          <Badge className="bg-red-500 text-white">{cls.hitDie}</Badge>
                        </TableCell>
                        <TableCell>{cls.primaryAbility}</TableCell>
                        <TableCell>{cls.saves}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monsters Tab */}
          <TabsContent value="monsters">
            <Card className="border-brown">
              <CardHeader className="bg-gold text-black">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Skull" size={24} />
                  Бестиарий
                </CardTitle>
                <CardDescription className="text-gray-800">
                  Монстры и существа для ваших приключений
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterData(monsters, 'name').map((monster, index) => (
                    <Card key={index} className="border-2 border-red-200 hover:border-red-400 transition-colors">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-red-800">{monster.name}</CardTitle>
                        <CardDescription>{monster.type}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Сложность:</span>
                          <Badge className="bg-red-500 text-white">CR {monster.cr}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Очки здоровья:</span>
                          <Badge variant="outline">{monster.hp}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Класс доспеха:</span>
                          <Badge variant="outline">{monster.ac}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4 text-gold">Готовы к приключению?</h3>
          <p className="mb-4">Создавайте персонажей, изучайте заклинания и отправляйтесь в незабываемые квесты</p>
          <Button className="bg-gold hover:bg-yellow-600 text-black font-bold">
            <Icon name="Dice6" className="mr-2" size={20} />
            Бросить кости
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default DnDSite;