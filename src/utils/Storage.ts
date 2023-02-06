interface SetterProps {
  key: string;
  value: string;
}

interface GetterProps {
  key: string;
}

interface RemoveProps {
  key: string;
}

class Storage {
  setStorage = ({ key, value }: SetterProps) => {
    localStorage.setItem(key, value);
  };

  getStorage = ({ key }: GetterProps) => {
    return localStorage.getItem(key);
  };

  removeStorage = ({ key }: RemoveProps) => {
    localStorage.removeItem(key);
  };
}

export default new Storage();
