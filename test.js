const expect=require('chai').expect;
const reverse=require('./index');
describe('Reverse text',()=>{
    
    it('metinleri ters çevir',()=>{
        
        let firstStr=reverse('Barış Can Yılmaz');
        let secondStr=reverse('Türkiye Cumhuriyet\'i ilelebet payidar kalacaktır.');
        let thirdStr=reverse('24.02.1999');
        
        expect(secondStr).to.equals('.rıtkacalak radiyap tebeleli i\'teyiruhmuC eyikrüT','İsim hatalı');
        expect(firstStr).to.equals('zamlıY naC şıraB','İsim hatalı');
        expect(thirdStr).to.equals('9991.20.42','Doğum tarihini doğru çevirmedi');

    });

    it('sayıları ters çevir',()=>{
        
        let firstNumber=reverse(131);
        let secondNumber=reverse(1923);
        let thirdNumber=reverse(24021999);
        
        expect(thirdNumber).to.equals('99912042','Doğum tarihini doğru çevirmedi.');
        expect(secondNumber).to.equals('3291','Cumhuriyet tarihi hatalı.');
        expect(firstNumber).to.equals('131','polindrom sayı yanlış çevirdi.');

    });
    
    
});