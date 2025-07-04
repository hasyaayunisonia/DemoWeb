import { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, Typography, Button, Dialog, DialogTitle } from '@mui/material';
import React from 'react';

interface Student {
  id: number;
  name: string;
  grade: string;
}

interface StudentCardProps {
  student: Student;
  onEdit: (student: Student) => void;
}

const StudentCard = React.memo(({ student, onEdit }: StudentCardProps) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{student.name}</Typography>
        <Typography color="text.secondary">{student.grade}</Typography>
        <Button variant="outlined" onClick={() => onEdit(student)}>
          Edit
        </Button>
      </CardContent>
    </Card>
  );
});

export default function StudentList() {
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const studentList = useMemo(
    () => [
      { id: 1, name: 'Alice', grade: 'A' },
      { id: 2, name: 'Bob', grade: 'B' },
      { id: 3, name: 'Charlie', grade: 'C' },
    ],
    [],
  );

  const handleEdit = useCallback((student: Student) => {
    setSelectedStudent(student);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedStudent(null);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      {studentList.map(student => (
        <StudentCard key={student.id} student={student} onEdit={handleEdit} />
      ))}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Student</DialogTitle>
        <CardContent>
          {selectedStudent && (
            <>
              <Typography>Name: {selectedStudent.name}</Typography>
              <Typography>Grade: {selectedStudent.grade}</Typography>
            </>
          )}
          <Button onClick={handleClose}>Close</Button>
        </CardContent>
      </Dialog>
    </div>
  );
}
