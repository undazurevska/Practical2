import { reactive } from 'vue';

const state = reactive({
  user: {
    firstName: 'Unda',
    lastName: 'Žurevska',
    studentCode: 'IT21042',
    loggedIn: false,
    loggedAt: [],
  },
});

const loginTime = () => {
  state.user.loggedIn = true;
  const now = new Date();
  const formattedTimestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;
  state.user.loggedAt.push(formattedTimestamp);
};

const resetUser = () => {
  state.user = {
    firstName: 'Vārds',
    lastName: 'Uzvārds',
    studentCode: 'CODE123',
    loggedIn: false,
    loggedAt: [],
  };
};

const updateUser = (newData) => {
  state.user = { ...state.user, ...newData };
};

export { state, loginTime, resetUser, updateUser };
