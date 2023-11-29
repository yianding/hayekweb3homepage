import { useAppData } from '@/store/appData';
import { showToast } from 'vant';

export const useSemm = () => { 

  const appData = useAppData();

  const shortWallet = (wallet) =>{
    let str = wallet || appData.wallet;
    if (str !== '') {
      str = str.substring(0, 14) + '...' + str.substring(30)
    }
    return str;
  }

  const shortWallet1 = (wallet) =>{
    let str = wallet || appData.wallet;
    if (str !== '') {
      str = str.substring(0, 10) + '...' + str.substring(34)
    }
    return str;
  }

  const copyToClipboard = (text, tip) =>{
    function handler (event){
      event.clipboardData.setData('text/plain', text);
      event.preventDefault();
      document.removeEventListener('copy', handler, true);
      if(tip){
        showToast({ duration: 3000, message: tip});
      }
    }
  
    document.addEventListener('copy', handler, true);
    document.execCommand('copy');
  }

  const orderStatus = (status) =>{
    const obj = { '0': '待確認', '10': '已確認', '11': '已取消', '12': '已退款', '20': '已確認' };
    return obj[`${status}`] || '未知';
  }

  return { shortWallet, shortWallet1, copyToClipboard, orderStatus }
}