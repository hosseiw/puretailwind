const showSwit = () => {
  Swal.fire({
    position: "center",
    title: `<h2 class="text-blue-600 font-medium">موفقیت آمیز</h2>`,
    icon: "success",
    html: `<span class="text-gray-900 font-light">عملیات با موفقیت به پایان رسید.</span>`,
    showConfirmButton: true,
    confirmButtonText: `<span class="text-md font-medium">حله !</span>`,
    confirmButtonColor: "#A5DC86",
    timer: 1500,
    width: "350px",
  });
};
// const showSwit = () => {
//   Swal.fire({
//     position: "top-end",
//     title: `<h2 class="text-blue-600 font-medium">موفقیت آمیز</h2>`,
//     icon: "success",
//     html: `<span class="text-gray-900 font-light">عملیات با موفقیت به پایان رسید.</span>`,
//     showConfirmButton: false,
//     confirmButtonText: `<span class="text-md font-medium">حله !</span>`,
//     confirmButtonColor: "#A5DC86",
//     // timer: 1500,
//     showCloseButton: true,
//     width: "350px",
//     customClass: {
//       container: "flex flex-row ",
//       popup: "flex flex-row w-[50%]",
//       header: "...",
//       title: "...",
//       closeButton: "...",
//       icon: "...",
//       image: "...",
//       htmlContainer: "...",
//       input: "...",
//       inputLabel: "...",
//       validationMessage: "...",
//       actions: "...",
//       confirmButton: "...",
//       denyButton: "...",
//       cancelButton: "...",
//       loader: "...",
//       footer: "....",
//       timerProgressBar: "....",
//     },
//   });
// };

const showToast = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    showCloseButton: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
      toast.addEventListener("click", Swal.close);
    },
  });
  Toast.fire({
    icon: icon,
    title: title,
  });
};
