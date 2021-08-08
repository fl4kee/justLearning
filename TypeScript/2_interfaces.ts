interface Rect{
    readonly id: string, // свойство только для чтения
    color?: string, //необязательное свойство
    size:{
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}
rect2.color = 'black'

const rect3 = {} as Rect  // as приводит к нужному типу
const rect4 = <Rect>{} //старая запись

//==========================================

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    getArea(): number{
        return this.size.width * this.size.height
    }
}

// =========================================

interface IClock{
    time: Date,
    setTime(date: Date): void
}

// класс имплементируется от интерфейса
class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void{
        this.time = date
    }
}

// ==================================

// Таким образом можно задать тип всем полям класса

interface Styles {
    [key: string] : string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}