import Swal from "sweetalert2";

export async function showErrorAlert(message: string, title = "Error") {
  return Swal.fire({
    icon: "error",

    title,

    text: message,
  });
}

export async function showSuccessAlert(message: string, title = "Success") {
  return Swal.fire({
    icon: "success",

    title,

    text: message,
  });
}

export async function showWarningAlert(message: string, title = "Warning") {
  return Swal.fire({
    icon: "warning",

    title,

    text: message,
  });
}
