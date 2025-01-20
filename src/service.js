const API_BASE_URL = process.env.REACT_APP_API_URL;

async function getTasks() {
    const response = await fetch(`${API_BASE_URL}/items`);
    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }
    return await response.json();
}

async function addTask(taskName) {
    const response = await fetch(`${API_BASE_URL}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: taskName, isComplete: false }),
    });
    if (!response.ok) {
        throw new Error("Failed to add task");
    }
}

async function setCompleted(id, isComplete) {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ isComplete }),
    });
    if (!response.ok) {
        throw new Error("Failed to update task");
    }
}

async function deleteTask(id) {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete task");
    }
}

export default {
    getTasks,
    addTask,
    setCompleted,
    deleteTask,
};
