class Food {
    element: HTMLElement

    constructor() {
        this.element  = document.getElementById('food')!;
    }

    //获取食物的坐标
    get X(){
        return this.element.offsetLeft;
    }
    // 只能在类内部修改，getter函数
    get Y(){
        return this.element.offsetLeft;

    }

    // 随机生成食物坐标，X：290 Y:290

    foodChange(){
        let left: number = Math.round(Math.random() * 29) * 10;
        let top: number = Math.round(Math.random() * 29) * 10;
        
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';

    }
} 

export default Food