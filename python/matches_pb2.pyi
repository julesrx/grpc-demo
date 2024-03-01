from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CreateMatchRequest(_message.Message):
    __slots__ = ("name", "competition_id")
    NAME_FIELD_NUMBER: _ClassVar[int]
    COMPETITION_ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    competition_id: int
    def __init__(self, name: _Optional[str] = ..., competition_id: _Optional[int] = ...) -> None: ...

class UpdateMatchRequest(_message.Message):
    __slots__ = ("id", "name", "competition_id")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    COMPETITION_ID_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    competition_id: int
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ..., competition_id: _Optional[int] = ...) -> None: ...

class GetMatchByIdRequest(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: int
    def __init__(self, id: _Optional[int] = ...) -> None: ...

class GetMatchesByIdsRequest(_message.Message):
    __slots__ = ("ids",)
    IDS_FIELD_NUMBER: _ClassVar[int]
    ids: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, ids: _Optional[_Iterable[int]] = ...) -> None: ...

class CreateMatchResponse(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: int
    def __init__(self, id: _Optional[int] = ...) -> None: ...

class GetMatchByIdResponse(_message.Message):
    __slots__ = ("id", "name", "competition_id")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    COMPETITION_ID_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    competition_id: int
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ..., competition_id: _Optional[int] = ...) -> None: ...

class GetMatchesByIdsResponse(_message.Message):
    __slots__ = ("matches",)
    MATCHES_FIELD_NUMBER: _ClassVar[int]
    matches: _containers.RepeatedCompositeFieldContainer[GetMatchByIdResponse]
    def __init__(self, matches: _Optional[_Iterable[_Union[GetMatchByIdResponse, _Mapping]]] = ...) -> None: ...
